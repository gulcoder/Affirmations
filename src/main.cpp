#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

int main() {
    std::vector<std::string> affirmations = {
        "I am strong, calm, and capable.",
        "Today is full of opportunities and joy.",
        "I am grateful for the present moment.",
        "I choose peace over worry.",
        "I trust myself and my journey."
    };

    std::srand(std::time(nullptr));
    int index = std::rand() % affirmations.size();

    std::cout << "Your affirmation for today:\n";
    std::cout << "\"" << affirmations[index] << "\"" << std::endl;

    return 0;
}

