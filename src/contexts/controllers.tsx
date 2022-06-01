import React, { useContext, createContext, useEffect, useState } from 'react'

interface CONTROLLERS_INTERFACE {
  __menu: React.Dispatch<boolean>
  menu: boolean
  open_side_menu(): void
  close_side_menu(): void
}

const Controllers_Context = createContext<CONTROLLERS_INTERFACE>(
  {} as CONTROLLERS_INTERFACE
)

function Controllers_Provider<CONTROLLERS_INTERFACE>(props: any) {
  const { children } = props
  const [menu, __menu] = useState(false)

  useEffect(() => {
    menu ? open_side_menu() : close_side_menu();
  }, [menu])

  function open_side_menu(): void {
    let side_menu_wrapper = document.querySelector(
      "#side_menu_wrapper"
    ) as HTMLDivElement

    if (side_menu_wrapper && menu) {
      side_menu_wrapper.style.right = '10%';
      side_menu_wrapper.style.marginLeft = '0';
      side_menu_wrapper.style.opacity = '1';
    }

  }

  function close_side_menu(): void {
    let side_menu_wrapper = document.querySelector(
      "#side_menu_wrapper"
    ) as HTMLDivElement

    if (side_menu_wrapper) {
      side_menu_wrapper.style.right = `110vw`;
      side_menu_wrapper.style.marginLeft = '-500px';
      side_menu_wrapper.style.opacity = '0';
    }
  }


  return (
    <Controllers_Context.Provider value={{
      __menu, menu, open_side_menu, close_side_menu
    }}>
      {children}
    </Controllers_Context.Provider>
  )
}

export function useControllers() {
  const context = useContext(Controllers_Context)
  return context
}

export default Controllers_Provider
