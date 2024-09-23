
// import React from 'react'

// export default function MailTo ({ email, subject = '', body = '', children })  {
//   let params = subject || body ? '?' : '';
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

//   return <a href={`mailto:${email}${params}`} className="mail">{children}</a>;
// };