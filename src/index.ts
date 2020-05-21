import { useRef, useCallback, useEffect, useReducer, Dispatch } from "react";

export type callbackType = () => any;

const useConstructor = (cb: callbackType = () => null) => {
  const isMounted = useRef(false);
  const exec = useCallback(() => {
    if (!isMounted.current) {
      cb();
    }
    isMounted.current = true;
  }, [cb]);
  exec();
};

const useDidMount = (cb: callbackType = () => null) => {
  useEffect(
    useCallback(() => {
      cb();
    }, [cb]),
    []
  );
};

const useDidUpdate = (cb: callbackType = () => null) => {
  const isMounted = useRef(false);
  useEffect(
    useCallback(() => {
      if (isMounted.current) {
        cb();
      }
      isMounted.current = true;
    }, [cb])
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
    useCallback(() => {
      return () => cb();
    }, [cb]),
    []
  );
};

export { useConstructor, useDidMount, useDidUpdate, useState, useWillUnmount };
