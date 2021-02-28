class ChangeFuntionName_MigrationStep{
    circum(radius: number) {
        return 2 * Math.PI * radius;
    }
}
console.log(new ChangeFuntionName_MigrationStep().circum(1));