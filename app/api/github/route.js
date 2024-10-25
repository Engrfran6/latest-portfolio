import {NextResponse} from 'next/server';
import {Octokit} from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // GitHub token from your .env.local file
});

export async function GET(request) {
  try {
    const {searchParams} = new URL(request.url);
    const username = searchParams.get('username') || process.env.GITHUB_USERNAME;

    const response = await octokit.request('GET /users/{username}', {
      username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    // Return the GitHub user data in the response
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('GitHub API Error==========>:', error);
    return NextResponse.json({error: 'Failed to fetch GitHub info'}, {status: 500});
  }
}
