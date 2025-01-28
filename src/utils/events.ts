export const subscribe = (
  eventName: string,
  listener: EventListenerOrEventListenerObject
) => {
  document.addEventListener(eventName, listener);
};

export const unsubscribe = (
  eventName: string,
  listener: EventListenerOrEventListenerObject
) => {
  document.removeEventListener(eventName, listener);
};

export const send = (eventName: string) => {
  const event = new CustomEvent(eventName);
  document.dispatchEvent(event);
};
