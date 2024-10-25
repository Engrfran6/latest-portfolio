'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import {FaRegCircleUser} from 'react-icons/fa6';
import {MdInsertLink} from 'react-icons/md';

const GithubProfile = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubInfo() {
      const res = await fetch('/api/github');
      const data = await res.json();
      setGithubData(data);
      setLoading(false);
    }
    fetchGithubInfo();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {githubData && (
        <div className="flex flex-col gap-3 bg-slate-200 p-4 m-8 border-2  border-gray-300 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <span>
                <span className="text-sm  font-bold">GitHub </span>
                <span className="text-[10px]">since 2022</span>
              </span>
              <h2 className="text-sm font-medium">{githubData.name}</h2>
            </div>

            <Image
              src={githubData.avatar_url}
              alt={githubData.name}
              className="w-[50px] h-[50px] rounded-full"
              width={50}
              height={50}
            />
          </div>

          <p className="flex items-center gap-1 text-sm">
            <FaRegCircleUser />
            {githubData.followers} followers
          </p>
          <p className="text-sm">{githubData.public_repos} repositories</p>
          <a
            className="flex items-center gap-1 text-green-600 text-sm"
            href={githubData.html_url}
            target="_blank"
            rel="noopener noreferrer">
            <MdInsertLink /> View gitHub profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
