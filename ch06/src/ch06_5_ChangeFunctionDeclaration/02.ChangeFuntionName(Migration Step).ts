class ChangeFuntionName_MigrationStep{
    /**
     * @deprecated
     * @param radius
     */
    circum(radius: number) {
        return this.circumference(radius);
    }
    circumference(radius: number) {
        return 2 * Math.PI * radius;
    }
}
console.log(new ChangeFuntionName_MigrationStep().circum(2));