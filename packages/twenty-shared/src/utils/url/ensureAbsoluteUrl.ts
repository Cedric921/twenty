import { isAbsoluteUrl } from '@/utils/url/isAbsoluteUrl';

export const ensureAbsoluteUrl = (value: string): string => {
  const trimmedValue = value.trim();

  if (isAbsoluteUrl(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
};
