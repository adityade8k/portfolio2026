import assert from 'node:assert/strict';
import test from 'node:test';
import { composeProjectDetails } from '../src/core/cricketDetails.js';
import { getProjectTags, normalizeTag } from '../src/core/projectTags.js';

const text = (content) => ({ type: 'text', content });
const image = (name) => ({ type: 'image', src: `/${name}.webp`, caption: name });
const gallery = (name) => ({ type: 'gallery', images: [image(`${name}-one`), image(`${name}-two`)] });
const video = (name) => ({ type: 'video', src: `/${name}.mp4`, poster: `/${name}.webp`, caption: name });
const link = (name) => ({ type: 'link', label: name, url: `https://example.com/${name}` });
const heading = (content) => ({ type: 'heading', content });

function freezeTree(value) {
  Object.freeze(value);
  Object.values(value).forEach((item) => {
    if (item && typeof item === 'object' && !Object.isFrozen(item)) freezeTree(item);
  });
  return value;
}

test('project overview preserves mixed media before the first heading and promotes only its first image', () => {
  const overview = [text('Opening'), gallery('early-gallery'), video('early-video'), link('early-link')];
  const hero = image('hero');
  const following = [text('After hero'), image('second-image'), link('last-overview-link')];
  const sections = freezeTree([...overview, hero, ...following, heading('Process'), text('Process notes')]);

  const result = composeProjectDetails(sections);

  assert.equal(result.hero, hero);
  assert.deepEqual(result.introduction, [...overview, ...following]);
  assert.deepEqual(result.chapters, [{ title: 'Process', sections: [text('Process notes')] }]);
  assert.equal(sections[4], hero, 'composition must not remove content from its source array');
});

test('chapter headings and all gallery, video, image, link, and text content retain their sequence', () => {
  const firstChapter = [gallery('research'), link('source'), text('Findings'), video('demo')];
  const secondChapter = [image('outcome'), text('Result'), link('project')];
  const result = composeProjectDetails([
    text('Introduction'), image('cover'),
    heading('Research'), ...firstChapter,
    heading('Outcome'), ...secondChapter
  ]);

  assert.deepEqual(result.chapters, [
    { title: 'Research', sections: firstChapter },
    { title: 'Outcome', sections: secondChapter }
  ]);
  assert.equal(result.chapters[0].sections[0], firstChapter[0]);
  assert.equal(result.chapters[1].sections[0], secondChapter[0]);
});

test('a chapter image stays inside its chapter when there is no cover image', () => {
  const chapterImage = image('chapter-image');
  const result = composeProjectDetails([text('Intro'), heading('Gallery'), chapterImage, video('demo')]);

  assert.equal(result.hero, null);
  assert.deepEqual(result.introduction, [text('Intro')]);
  assert.deepEqual(result.chapters[0].sections, [chapterImage, video('demo')]);
});

test('empty, text-only, gallery-only, and hero-only projects compose without invented content', () => {
  assert.deepEqual(composeProjectDetails(), { hero: null, introduction: [], chapters: [] });
  assert.deepEqual(composeProjectDetails([]), { hero: null, introduction: [], chapters: [] });
  assert.deepEqual(composeProjectDetails([text('A concise project description')]), {
    hero: null, introduction: [text('A concise project description')], chapters: []
  });
  const onlyGallery = gallery('work');
  assert.deepEqual(composeProjectDetails([onlyGallery]), {
    hero: null, introduction: [onlyGallery], chapters: []
  });
  const onlyHero = image('cover');
  assert.deepEqual(composeProjectDetails([onlyHero]), { hero: onlyHero, introduction: [], chapters: [] });
});

test('media-only chapters retain their independent headings and every media item', () => {
  const items = [gallery('explorations'), video('motion'), link('code')];
  const result = composeProjectDetails([
    heading('Explorations'), items[0], heading('Motion'), items[1], heading('Code'), items[2]
  ]);
  assert.equal(result.hero, null);
  assert.deepEqual(result.chapters, [
    { title: 'Explorations', sections: [items[0]] },
    { title: 'Motion', sections: [items[1]] },
    { title: 'Code', sections: [items[2]] }
  ]);
});

test('tag normalization produces consistent routes for case, whitespace, punctuation, and numeric years', () => {
  assert.equal(normalizeTag('  BITS Design School  '), 'bits-design-school');
  assert.equal(normalizeTag('BITS—Design / School'), 'bits-design-school');
  assert.equal(normalizeTag('Three.js'), 'three-js');
  assert.equal(normalizeTag(' NYU Tandon: Makerspace & Design Lab '), 'nyu-tandon-makerspace-design-lab');
  assert.equal(normalizeTag(2024), '2024');
});

test('project topics, years, and organizations become one tag set without duplicate routes', () => {
  const details = freezeTree({
    tags: ['THREE.JS', '2024', 'Cloudworx Studio', 'BROADCAST'],
    metadata: { years: [2024, '2023'], organizations: ['cloudworx-studio', 'StanceBeam'] }
  });
  const routes = getProjectTags(details).map(normalizeTag);

  assert.deepEqual(routes, ['three-js', '2024', 'cloudworx-studio', 'broadcast', '2023', 'stancebeam']);
  assert.equal(new Set(routes).size, routes.length);
  assert.deepEqual(details.tags, ['THREE.JS', '2024', 'Cloudworx Studio', 'BROADCAST']);
});

test('modal metadata is used when project metadata is absent, while role and status remain non-tag context', () => {
  const details = {
    tags: ['VISUALIZATION'],
    modal: { metadata: { years: ['2022'], organizations: ['Independent'], role: 'Designer', status: 'Ongoing' } }
  };
  assert.deepEqual(getProjectTags(details), ['VISUALIZATION', '2022', 'Independent']);
});

test('explicit project metadata takes precedence over modal fallback metadata', () => {
  assert.deepEqual(getProjectTags({
    tags: ['DESIGN'],
    metadata: { years: ['2024'], organizations: ['Current Organization'] },
    modal: { metadata: { years: ['2020'], organizations: ['Archived Organization'] } }
  }), ['DESIGN', '2024', 'Current Organization']);
  assert.deepEqual(getProjectTags({ metadata: {}, modal: { metadata: { years: ['2020'] } } }), []);
});

test('structured year and organization tags use their identifiers and deduplicate equivalent labels', () => {
  const details = {
    tags: ['BITS DESIGN SCHOOL'],
    metadata: {
      years: [{ id: '2025', label: '2025' }, '2025'],
      organizations: [{ id: 'bits-design-school', label: 'BITS Design School' }, { label: 'NYU Tandon' }]
    }
  };
  const tags = getProjectTags(details);
  assert.deepEqual(tags.map(normalizeTag), ['bits-design-school', '2025', 'nyu-tandon']);
  assert.ok(tags.includes('bits-design-school'));
});

test('projects with no tags or metadata produce an empty tag collection', () => {
  assert.deepEqual(getProjectTags(), []);
  assert.deepEqual(getProjectTags({ tags: [], metadata: { years: [], organizations: [] } }), []);
});
