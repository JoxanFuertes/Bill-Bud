import styles from "./Styles"

export function StyleLogicContainer(alignment : string){
    if (alignment.toLowerCase() === "center"){
        return styles.containerCenter
    }
    else if (alignment.toLowerCase() === "left"){
        return styles.containerLeft
    }
};