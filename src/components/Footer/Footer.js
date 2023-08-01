// Cuarto componente
import Social from "../Social/Social";

function Footer() {
    return (
        <footer className="font-medium text-center py-5 bg-zinc-400">
            <Social
                ig="Instagram"
                x="Twitter/X"
                fb="Facebook"
            />
            <p className="py-1">&copy;Copyright - 2023 Matias Rivero</p>
        </footer>
    )
}

export default Footer;