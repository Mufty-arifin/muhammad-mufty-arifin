export default function Footer() {
  return (
    <div className=" flex justify-between px-4 lg:px-20 py-12 border-t-2">
      {/* Website Information */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Website Information</h2>
        {/* Add your website information here */}
      </div>

      {/* Links */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Links</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="bg-red-500">
        <h2 className="text-lg font-semibold mb-2">Social Media</h2>
        {/* Add your social media links here */}
      </div>
    </div>
  );
}
