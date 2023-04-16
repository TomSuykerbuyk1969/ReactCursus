import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function ButtonPage() {
    return <div>
        <div>
            <Button success rounded>
                <GoBell />
                Click me!!
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloudDownload />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning rounded>
                <GoDatabase />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary>Hide ads!</Button>
        </div>
        <div>
            <Button primary outline>Something</Button>
        </div>
    </div>
};

export default ButtonPage;