import { useEffect, useState } from 'react';
import * as css from './styles'

const Controlers = (props: { PID: string }): JSX.Element => {
  const [list, __list] = useState([] as Array<string>)
  const [like, __like] = useState(false)
  const { PID } = props

  function initialization(): void {
    if (list) {

      let heart = document.getElementById('like_button_' + PID)

      if (!!list.find(x => x === PID)) {

        if (heart) {
          heart.setAttribute('liked', 'true')
        }

      } else {

        if (heart) {

          heart.setAttribute('liked', 'false')

        }

      }

    }

    let content = document.getElementById("post-content" + PID) as HTMLDivElement

    if (content) {
      content.addEventListener("dblclick", function () {
        if (!like) {
          __like(true)
        }
      })
    }
  }

  function like_action(): void {

    if (like) {

      // TEST IF ALREADY LIKED IN LIST
      let exist = !!list.find(x => x === PID)

      if (!exist) {

        // INPUT NEW ID ON LIST
        let instance = list
        instance.push(PID)
        __list(instance)

        // FIND THE CURRENT LIKE BUTTON
        // FOR PAINT RED
        let heart = document.getElementById('like_button_' + PID)

        if (heart) {

          heart.setAttribute('liked', 'true')

        }

      } // END IF

    } else {
      // TEST IF LIKED IS ON LIST
      let exist = list.find(x => x === PID)

      if (exist) {

        // REMOVE ID FROM LIST
        let instance = list
        let index = list.indexOf(exist)
        instance.splice(index, 1)
        __list(instance)

        // FIND THE CURRENT LIKE BUTTON
        // UPDATE ATTRIBUTE
        let heart = document.getElementById('like_button_' + PID)

        if (heart) {

          heart.setAttribute('liked', 'false')

        }

      }
    }

    localStorage.setItem('Twibler:likes', JSON.stringify(list))

  }

  // SEARCH FOR LIST OF POST IDS
  // IF FIND ATTACH TO list STATE
  useEffect(() => {
    let rescue_data = localStorage.getItem('Twibler:likes')

    if (rescue_data) {
      __list(JSON.parse(rescue_data))
      initialization()
    }

    return () => {
      let content = document.getElementById("post-content" + PID) as HTMLDivElement

      if (content) {
        content.removeEventListener("dblclick", function () {
          if (!like) {
            __like(true)
          }
        })
      }
    }

  }, [])

  // EVERY TIME WITH like STATE IS MODIFIED
  // RUN LIKE ACTION FUNC FOR PREVENT DELAY
  // JUST FOR FUN
  useEffect(() => {

    like_action()

  }, [like])

  return (
    <css.Footer>
      <button>

        <svg
          role="img"
          viewBox="0 0 24 24">
          <path
            d="M12.6173 1.07612C12.991 0.921338 13.4211 1.00689 13.7071 
          1.29289L22.7071 10.2929C23.0832 10.669 23.0991 11.2736 22.7433 
          11.669L13.7433 21.669C13.4663 21.9767 13.0283 22.082 12.6417 
          21.9336C12.2552 21.7853 12 21.414 12 21V16H11.5C7.31775 16 3.92896 
          18.2486 2.95256 21.3044C2.80256 21.7738 2.33292 22.064 1.84598 
          21.9881C1.35904 21.9122 1 21.4928 1 21V18.5C1 12.3162 5.88069 
          7.27245 12 7.01067V2C12 1.59554 12.2436 1.2309 12.6173 1.07612ZM14 
          4.41421V8C14 8.55228 13.5523 9 13 9H12.5C7.64534 9 3.64117 12.6414 
          3.06988 17.3419C5.09636 15.2366 8.18218 14 11.5 14H13C13.5523 14 14 
          14.4477 14 15V18.394L20.622 11.0362L14 4.41421Z">
          </path>
        </svg>

      </button>

      <button>

        <svg
          role="img"
          viewBox="0 0 17 17">
          <path
            d="M8.7 0C4.1 0 .4 3.7.4 8.3c0 1.2.2 2.3.7 3.4-.2.6-.4 1.5-.7 
        2.5L0 15.8c-.2.7.5 1.4 1.2 1.2l1.6-.4 2.4-.7c1.1.5 2.2.7 
        3.4.7 4.6 0 8.3-3.7 8.3-8.3C17 3.7 13.3 0 8.7 0zM15 8.3c0 
        3.5-2.8 6.3-6.4 6.3-1.2 0-2.3-.3-3.2-.9l-3.2.9.9-3.2c-.5-.9-.9-2-.9-3.2.1-3.4 
        3-6.2 6.5-6.2S15 4.8 15 8.3z">
          </path>
        </svg>

      </button>

      <button>

        <svg
          role="img"
          viewBox="0 0 17 18.1">
          <path
            d="M12.8.2c-.4-.4-.8-.2-.8.4v2H2c-2 0-2 2-2 2v5s0 1 1 1 
          1-1 1-1v-4c0-1 .5-1 1-1h9v2c0 .6.3.7.8.4L17 3.6 
          12.8.2zM4.2 17.9c.5.4.8.2.8-.3v-2h10c2 0 
          2-2 2-2v-5s0-1-1-1-1 1-1 1v4c0 1-.5 1-1 
          1H5v-2c0-.6-.3-.7-.8-.4L0 14.6l4.2 3.3z">
          </path>
        </svg>

      </button>

      <button onClick={() => __like(!like)}>

        <svg
          id={"like_button_" + PID}
          role="img"
          viewBox="0 0 20 18">
          {!like ?
            <path
              d="M14.658 0c-1.625 0-3.21.767-4.463 
          2.156-.06.064-.127.138-.197.225-.074-.085-.137-.159-.196-.225C8.547.766 
          6.966 0 5.35 0 4.215 0 3.114.387 2.162 
          1.117c-2.773 2.13-2.611 5.89-1.017 8.5 2.158 
          3.535 6.556 7.18 7.416 7.875A2.3 2.3 0 0 0 9.998 
          18c.519 0 1.028-.18 1.436-.508.859-.695 5.257-4.34 
          7.416-7.875 1.595-2.616 1.765-6.376-1-8.5C16.895.387 
          15.792 0 14.657 0h.001zm0 2.124c.645 0 1.298.208 
          1.916.683 1.903 1.461 1.457 4.099.484 5.695-1.973 
          3.23-6.16 6.7-6.94 7.331a.191.191 0 0 
          1-.241 0c-.779-.631-4.966-4.101-6.94-7.332-.972-1.595-1.4-4.233.5-5.694.619-.475 
          1.27-.683 1.911-.683 1.064 0 2.095.574 2.898 1.461.495.549 
          1.658 2.082 1.753 2.203.095-.12 1.259-1.654 
          1.752-2.203.8-.887 1.842-1.461 2.908-1.461h-.001z">
            </path>
            :
            <path
              d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 
          2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 
          6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 
          9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 
          2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 
          1.755-6.321-.968-8.418">

            </path>
          }
        </svg>

      </button>

    </css.Footer>)

}

export default Controlers;