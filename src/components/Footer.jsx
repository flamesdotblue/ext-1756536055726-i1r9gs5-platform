import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-extrabold text-lg">PulseNews</div>
            <p className="mt-2 text-sm text-neutral-600 max-w-xs">
              Independent journalism for the curious. We bring clarity to complex stories.
            </p>
          </div>
          <FooterCol title="Sections" links={["World", "Business", "Technology", "Sports", "Culture"]} />
          <FooterCol title="Company" links={["About", "Careers", "Press", "Contact"]} />
          <FooterCol title="Legal" links={["Terms", "Privacy", "Cookies", "Licensing"]} />
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} PulseNews Media Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">RSS</a>
            <a href="#" className="hover:text-neutral-900">Newsletter</a>
            <a href="#" className="hover:text-neutral-900">Advertise</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-neutral-900">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
