import Link from 'next/link'
import React from 'react';
import Image from 'next/image'
import { Tabs } from 'flowbite-react';
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import AddSkills from './addSkills';
import AddBlog from './addBlog';
import AddProject from './addProject';



export default function Home() {

  return (
    <div className=' text-center justify-between'>
      <Tabs.Group
        aria-label="Tabs with icons"
        style="underline"
      >
        <Tabs.Item
          title="Blogs"
          icon={HiUserCircle}
        >
          <AddBlog />
        </Tabs.Item>

        <Tabs.Item
          active={true}
          title="Skills"
          icon={MdDashboard}
        >
          <AddSkills />
        </Tabs.Item>

        <Tabs.Item
          active={true}
          title="Project"
          icon={MdDashboard}
        >
          <AddProject />  </Tabs.Item>

      </Tabs.Group>
    </div>

  )
}

