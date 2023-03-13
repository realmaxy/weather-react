const langFormatter = (textConst, langMode) => {
    let newArray = []
    textConst.map(item => {
        const newItem = {
            id: item.id,
            content: item[langMode]
        }
        newArray.push(newItem)
    })
    return newArray
}

export default langFormatter