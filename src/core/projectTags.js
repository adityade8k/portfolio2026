export function normalizeTag(tag) {
  return String(tag).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function getProjectTags(details = {}) {
  const metadata = details.metadata ?? details.modal?.metadata ?? {};
  const tags = [...(details.tags ?? []), ...(metadata.years ?? []), ...(metadata.organizations ?? [])];
  return [...new Map(tags.map((value) => {
    const tag = typeof value === 'object' ? value.id ?? value.label : String(value);
    return [normalizeTag(tag), tag];
  })).values()];
}
