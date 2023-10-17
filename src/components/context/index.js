/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { useWindowDimensions, Dimensions as dim } from 'react-native';

export const DimensionContext = createContext();
export const useDimensionContext = () => useContext(DimensionContext);

export const DimensionContextProvider = ({ children }) => {
    const dimensions = useWindowDimensions();
    const initHeight = dim.get('window').height;
    const initWidth = dim.get('window').width;

    const [windowHeight, setWindowHeight] = useState(initHeight);
    const [windowWidth, setWindowWidth] = useState(initWidth);

    useEffect(() => {
        setItem();
    }, [dimensions]);

    const setItem = () => {
        const { height, width } = dimensions;
        setWindowWidth(width);
        setWindowHeight(height);
    };

    return (
        <DimensionContext.Provider
            value={{
                windowWidth,
                windowHeight,
            }}
        >
            {children}
        </DimensionContext.Provider>
    );
};
