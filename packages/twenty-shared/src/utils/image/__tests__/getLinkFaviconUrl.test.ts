import { getLinkFaviconUrl } from '@/utils/image/getLinkFaviconUrl';

describe('getLinkFaviconUrl', () => {
  it('should resolve the favicon from the link hostname', () => {
    expect(getLinkFaviconUrl('https://linkedin.com/company/twenty')).toBe(
      'https://twenty-icons.com/linkedin.com',
    );
    expect(getLinkFaviconUrl('www.example.com')).toBe(
      'https://twenty-icons.com/example.com',
    );
  });

  it('should keep hostnames that contain www', () => {
    expect(getLinkFaviconUrl('https://newww.com')).toBe(
      'https://twenty-icons.com/newww.com',
    );
  });

  it('should handle a mixed-case scheme', () => {
    expect(getLinkFaviconUrl('Https://example.com')).toBe(
      'https://twenty-icons.com/example.com',
    );
  });

  it('should return undefined for empty links', () => {
    expect(getLinkFaviconUrl('  ')).toBeUndefined();
    expect(getLinkFaviconUrl(null)).toBeUndefined();
  });
});
