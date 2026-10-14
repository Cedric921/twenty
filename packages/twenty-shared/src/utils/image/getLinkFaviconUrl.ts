import { ensureAbsoluteUrl } from '@/utils/url/ensureAbsoluteUrl';

import { getLogoUrlFromDomainName } from './getLogoUrlFromDomainName';

// Resolves a favicon URL from an arbitrary link by extracting the hostname
// first, so paths (e.g. https://linkedin.com/company/twenty) don't leak into
// the twenty-icons lookup. Must stay the single source of truth for LINKS
// image identifiers on both the front and the server.
export const getLinkFaviconUrl = (
  link: string | null | undefined,
): string | undefined => {
  const trimmed = (link ?? '').trim();

  if (!trimmed) {
    return undefined;
  }

  try {
    const hostname = new URL(ensureAbsoluteUrl(trimmed)).hostname;

    return getLogoUrlFromDomainName(hostname);
  } catch {
    return undefined;
  }
};
