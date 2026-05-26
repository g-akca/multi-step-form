import StepList from "./components/StepList";
import FormSection from "./components/FormSection";
import FormFooter from "./components/FormFooter";

function App() {
  return (
    <div className="text-base leading-base text-grey-500 min-h-screen bg-blue-100 flex flex-col bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-top bg-contain">
      <main className="grow flex flex-col gap-8">
        <StepList />

        <div className="grow flex flex-col gap-6 justify-between">
          <FormSection />
          <FormFooter />
        </div>
      </main>
    </div>
  )
}

export default App
