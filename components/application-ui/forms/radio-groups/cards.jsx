'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

export default function Example() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">Select a mailing list</legend>
      <RadioGroup
        value={selectedMailingLists}
        onChange={setSelectedMailingLists}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        {mailingLists.map((mailingList) => (
          <Radio
            key={mailingList.id}
            value={mailingList}
            aria-label={mailingList.title}
            aria-description={`${mailingList.description} to ${mailingList.users}`}
            className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">{mailingList.title}</span>
                <span className="mt-1 flex items-center text-sm text-gray-500">{mailingList.description}</span>
                <span className="mt-6 text-sm font-medium text-gray-900">{mailingList.users}</span>
              </span>
            </span>
            <CheckCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:invisible"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
