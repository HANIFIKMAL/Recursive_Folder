import { FolderIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import './App.css';
import { useState } from 'react';

export default function App() {
  let folders = [
    {
      name: "Home",
      folders: [
        { name: 'Movies', folders: [{ name: 'Action', folders: [{ name: "2000s" }, { name: "2010s" }] }, { name: 'Comedy', folders: [{ name: "2000s" }] }] },
        { name: 'Music', folders: [{ name: 'Rock', folders: [{ name: "2000s", folders: [{ name: "Popular" }] }] }, { name: 'Indie', folders: [{ name: "2000s" }] }] },
        { name: 'Pictures', folders: [{ name: 'Family', folders: [{ name: "2000s" }] }, { name: 'Work', folders: [{ name: "2000s" }] }] },
        { name: 'Documents', folders: [{ name: 'Homework', folders: [{ name: "2000s", folders: [{ name: "Important" }] }] }, { name: 'Project', folders: [{ name: "2000s" }] }] }
      ]
    }
  ];

  return (
    <div>
      <ul className='pl-6'>
        <ul className='pl-6'>
          {folders.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))}
        </ul>
      </ul>
    </div>
  );
}

function Folder({ folder }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li className='my-1.5'>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <ChevronRightIcon className={`h-4 w-4 text-gray-500 transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {folder.name}

      {isOpen && (
        <ul className='pl-6'>
          {folder.folders?.map((subFolder) => (
            <Folder folder={subFolder} key={subFolder.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
