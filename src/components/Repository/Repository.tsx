// import './Repository.css'
import { RepoSectionWrapper } from "./Repository.styled"
export default function Repository() {
  return (
    <>
    <RepoSectionWrapper>
        <h3>Code Repositories</h3>
        <p>
          Check out my code repositories on{" "}
          <a
            href="https://github.com/prabinkc2046?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          .
        </p>
      </RepoSectionWrapper>
    </>
  )
}