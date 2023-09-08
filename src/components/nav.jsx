'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ArrowsPointingOutIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import propTypes from 'prop-types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname } from 'next/navigation'

const Nav = ({ dataUser }) => {
  const pathname = usePathname()

  const user = {
    name: dataUser.user_metadata.full_name,
    email: dataUser.email,
    imageUrl: dataUser.user_metadata.avatar_url
  }

  const navigation = [
    { name: 'Inicio', href: '/', current: pathname === '/' },
    { name: 'Peliculas', href: '/movies', current: pathname === '/movies' }
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const supabase = createClientComponentClient()
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    return window.location.reload()
  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-background h-28">
          {({ open }) => (
            <>
              {/* Nav Itemns */}
              <div className="px-4 h-full">
                <div className="flex d items-center justify-between h-full">
                  <div className="flex items-center">
                    <div className="ml-6 md:ml-2 lg:ml-12 flex-shrink-0">
                      <span className="text-gray-50 text-2xl font-medium select-none">
                        LinkChar
                      </span>
                      <div className="h-1.5 -mt-1 w-full rounded-sm bg-gradient-to-r  from-primaryLogo to-secondaryLogo"></div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-12 lg:ml-20 xl:ml-32 flex items-baseline space-x-2 lg:space-x-4 xl:space-x-10">
                        {navigation.map(item => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'border-b border-primaryLogo text-white'
                                : 'text-gray-600 hover:border-b-2 border-primaryLogo hover:text-white',
                              'rounded-md px-3 py-2 text-md font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    {/* Extra Items */}
                    <div className="flex items-center mr-4 lg:mr-12 gap-2">
                      <button
                        type="button"
                        className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">Buscar peliculas</span>
                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">Ver notificaciones</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ArrowsPointingOutIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3 lg:ml-6">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Abrir menu de usuario</span>
                            <Image
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                              width={32}
                              height={32}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={handleSignOut}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                                  )}
                                >
                                  Cerrar Sesión
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="mr-1 flex md:hidden">
                    {/* Mobile menu button */}
                    <button
                      type="button"
                      className="relative rounded-full p-1 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-3"
                    >
                      <span className="sr-only">Buscar peliculas</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Abrir menu principal</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              {/* Mobile menu, show/hide based on menu state. */}
              <Disclosure.Panel className="md:hidden z-50 absolute w-full bg-gray-950">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt="Avatar de usuario"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Ver notificaciones</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                      as="button"
                      onClick={handleSignOut}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Cerrar Sesión
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
              <div className="h-px -mt-1 w-full rounded-sm bg-gradient-to-r  from-gray-900 via-slate-600  to-gray-900"></div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}

export default Nav

Nav.propTypes = {
  dataUser: propTypes.object
}
