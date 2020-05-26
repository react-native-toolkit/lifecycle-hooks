import { useRef, useEffect, useReducer, Dispatch } from "react";

export type callbackType = () => any;

const useConstructor = (cb: callbackType = () => null) => {
  const isMounted = useRef(false);
  const exec = () => {
    if (!isMounted.current) {
      cb();
    }
    isMounted.current = true;
  };
  exec();
};

const useDidMount = (cb: callbackType = () => null) => {
  useEffect(
    () => {
      cb();
    },
    []
  );
};

const useDidUpdate = (cb: callbackType = () => null) => {
  const isMounted = useRef(false);
  useEffect(
    () => {
      if (isMounted.current) {
        cb();
      }
      isMounted.current = true;
    }
  );
};

const useState = <T extends object>(
  defaultState: T
): [T, Dispatch<Partial<Pick<T, keyof T>>>] => {
  const [state, setState] = useReducer(
    (oldState: T, stateUpdate: Partial<Pick<T, keyof T>>) => {
      return {
        ...oldState,
        ...stateUpdate,
      };
    },
    defaultState
  );
  return [state, setState];
};

const useWillUnmount = (cb: callbackType = () => null) => {
  useEffect(
    () => {
      return () => cb();
    },
    []
  );
};

export { useConstructor, useDidMount, useDidUpdate, useState, useWillUnmount };
