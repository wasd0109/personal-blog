import firebase from "gatsby-plugin-firebase"

// Build throw error if it's ran on node
// Adding an isBrowser to ensure that the below code would only ran on browser
const useFirebaseAnalytics = logEvent => {
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    firebase.analytics().logEvent(logEvent)
  }
}
export default useFirebaseAnalytics
