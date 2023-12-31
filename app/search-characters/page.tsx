import CharacterInfo from "@/components/CharacterInfo";
import SearchCharacterForm from "@/components/forms/SearchCharacterForm";

function SearchCharactersPage() {
  return (
    <main className="container flex min-h-fit max-h-screen mt-4">
      <div className="w-1/2 border p-8 max-h-[450px]">
        <SearchCharacterForm />
      </div>
      <div className="w-1/2">
        <CharacterInfo />
      </div>
    </main>
  );
}

export default SearchCharactersPage;
