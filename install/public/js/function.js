function random_hex_generator () {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

export function linear_gradient_generator () {
    const rightColor = random_hex_generator();
    const leftColor = random_hex_generator();
    const background = `linear-gradient(${90}deg, ${leftColor} 10%, ${rightColor} 100%)`;
    return background;
}