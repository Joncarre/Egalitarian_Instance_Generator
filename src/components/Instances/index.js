import { useLocation } from "react-router-dom";
import RowHeaderTable from 'components/RowHeaderTable'
import { Container, Wrap } from './InstancesElements'

const Instances = props => {
    const location = useLocation();
    const infoArray = (location.state && location.state.infoArray) || [];

    const headerItems = [
        { name: "id", label: "ID" },
        { name: "mode", label: "Mode" },
        { name: "type", label: "Type" },
        { name: "agents", label: "Agents" },
        { name: "resources", label: "Resources" },
        { name: "created", label: "Date Created" },
        { name: "solved", label: "Solved" },
    ]

    return (
        <Container>
            <Wrap>
                <RowHeaderTable headerItems={headerItems} data={infoArray} footer></RowHeaderTable>
            </Wrap>
        </Container>
    );
}

export default Instances;