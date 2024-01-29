import Card from "react-bootstrap/Card"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeTask } from "../store/taskSlice";

function Home() {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleAddTask = () => {
    history.push('/add-task');
  };

  const handleEditTask = taskId => {
    history.push(`/edit-task/${taskId}`);
  };

  const handleRemoveTask = taskId => {
    dispatch(removeTask(taskId));
  };


  return (
      <>
      <div className="d-flex justify-content-center align-items-center"
             style={{minHeight: "32rem", minWidth:"32rem"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                    Welcome to my world
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
      
    </>
  )
}

export default Home
