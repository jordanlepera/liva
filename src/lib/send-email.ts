import type { FormData } from '@/components/contact/Contact';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
