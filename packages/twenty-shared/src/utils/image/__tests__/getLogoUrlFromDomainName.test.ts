import {
  getLogoUrlFromDomainName,
  sanitizeURL,
} from '@/utils/image/getLogoUrlFromDomainName';

describe('sanitizeURL', () => {
  test('should sanitize the URL correctly', () => {
    expect(sanitizeURL('http://example.com/')).toBe('example.com');
    expect(sanitizeURL('https://www.example.com/')).toBe('example.com');
    expect(sanitizeURL('www.example.com')).toBe('example.com');
    expect(sanitizeURL('example.com')).toBe('example.com');
    expect(sanitizeURL('example.com/')).toBe('example.com');
  });

  test('should only strip www. at the start of the hostname', () => {
    expect(sanitizeURL('https://newww.com')).toBe('newww.com');
    expect(sanitizeURL('slowww.io')).toBe('slowww.io');
    expect(sanitizeURL('https://www.newww.com/')).toBe('newww.com');
  });

  test('should strip the scheme regardless of its case', () => {
    expect(sanitizeURL('Https://WWW.example.com')).toBe('example.com');
  });

  test('should handle undefined input', () => {
    expect(sanitizeURL(undefined)).toBe('');
  });
});

describe('getLogoUrlFromDomainName', () => {
  test('should return the correct logo URL for a given domain', () => {
    expect(getLogoUrlFromDomainName('example.com')).toBe(
      'https://twenty-icons.com/example.com',
    );

    expect(getLogoUrlFromDomainName('http://example.com/')).toBe(
      'https://twenty-icons.com/example.com',
    );

    expect(getLogoUrlFromDomainName('https://www.example.com/')).toBe(
      'https://twenty-icons.com/example.com',
    );

    expect(getLogoUrlFromDomainName('www.example.com')).toBe(
      'https://twenty-icons.com/example.com',
    );

    expect(getLogoUrlFromDomainName('example.com/')).toBe(
      'https://twenty-icons.com/example.com',
    );

    expect(getLogoUrlFromDomainName('apple.com')).toBe(
      'https://twenty-icons.com/apple.com',
    );
  });

  test('should handle undefined input', () => {
    expect(getLogoUrlFromDomainName(undefined)).toBe(undefined);
  });
});
