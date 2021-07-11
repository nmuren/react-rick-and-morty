import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import TitleBar from "views/layout/TitleBar";
import CharacterCard from "components/CharacterCard";
import { keyGenerator } from "utils/commonUtils";
import { getAllCharacters } from "service/characters";

const CharacterList = () => {
  const [viewData, setViewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCharacters().then((data) => {
      setViewData(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="content">
      <TitleBar title="Character List" />
      <Container className="mt-3">
        <Row>
          {isLoading ? (
            <Col>
              <Spinner animation="border" className="mt-4" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          ) : (
            viewData.map((character) => (
              <Col lg={4} md={6} sm={12} key={keyGenerator()} className="mb-4">
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  status={character.status}
                  location={character.location.name}
                  url={character.url}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CharacterList;
