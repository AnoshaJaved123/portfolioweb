import Link from 'next/link'
import React from 'react';
import Image from 'next/image'
import { Tabs } from 'flowbite-react';
import { HiUserCircle,HiClipboardList,HiAdjustments  } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import AddSkills from './addSkills';


export default function Home() {

  return (
    <div className='h-screen text-center justify-between'>
        <Tabs.Group
  aria-label="Tabs with icons"
  style="underline"
>
  <Tabs.Item
    title="Profile"
    icon={HiUserCircle}
  >
  <div className='text-lg'>
    Profile content
    </div>
  </Tabs.Item>
  <Tabs.Item
    active={true}
    title="Skills"
    icon={MdDashboard}
  >
  <AddSkills/>
  </Tabs.Item>
  <Tabs.Item
    title="Settings"
    icon={HiAdjustments}
  >
    Settings content
  </Tabs.Item>
  <Tabs.Item
    title="Contacts"
    icon={HiClipboardList}
  >
    Contacts content
  </Tabs.Item>
  <Tabs.Item
    disabled={true}
    title="Disabled"
  >
    Disabled content
  </Tabs.Item>
</Tabs.Group>
    </div>
  
  )
}

